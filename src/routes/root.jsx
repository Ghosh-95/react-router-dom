import { Outlet, Link, useLoaderData, Form, redirect, NavLink, useNavigation, useSubmit } from "react-router-dom";
import { getContacts, createContact } from '../Contacts';
import { useEffect } from "react";

export async function loader({ request }) {
    const url = new URL(request.url);
    const search = url.searchParams.get("search");
    const contacts = await getContacts(search);
    return { contacts, search };
};

export async function action() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}`);
}

export default function Root() {
    const { contacts, search } = useLoaderData();
    const navigation = useNavigation();
    const submit = useSubmit();

    const searching = navigation.location && new URLSearchParams(navigation.location.search).has("search");

    useEffect(() => {
        document.getElementById("q").value = search;
    }, [search]);

    return (
        <>
            <section id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="search"
                            defaultValue={search}
                            onChange={(e) => {
                                const isFirstSearch = search == null;
                                submit(e.currentTarget.form, { replace: !isFirstSearch })
                            }}
                            className={searching ? "loading" : ""}
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={!searching}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    <Form method="post">
                        <button type="submit">New</button>
                    </Form>
                </div>
                <nav>
                    {contacts.length ? (
                        <ul>
                            {contacts.map((contact) => (
                                <li key={contact.id}>
                                    <NavLink
                                        to={`contacts/${contact.id}`}
                                        className={({ isActive, isPending }) =>
                                            isActive
                                                ? "active"
                                                : isPending
                                                    ? "pending"
                                                    : ""
                                        }
                                    >
                                        <Link to={`contacts/${contact.id}`}>
                                            {contact.first || contact.last ? (
                                                <>
                                                    {contact.first} {contact.last}
                                                </>
                                            ) : (
                                                <i>No Name</i>
                                            )}{" "}
                                            {contact.favorite && <span>★</span>}
                                        </Link>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No contacts</i>
                        </p>
                    )}
                </nav>
            </section>
            <div id="detail" className={navigation.state === "loading" ? "loading" : ""}>
                <Outlet />
            </div>
        </>
    );
}