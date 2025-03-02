import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1 , name:"sujith"},
      _id: 1,
      description: "This is a description",
      image: "https://www.google.com/search?q=cat&sca_esv=cd75d570c707befa&source=hp&biw=1920&bih=1079&ei=H53DZ4URuK-m1A_R05vgCg&iflsig=ACkRmUkAAAAAZ8OrL7Yi2UjLcrs6X4KnqL2J3Qd_O0WG&ved=0ahUKEwjFnOmhieqLAxW4l4kEHdHpBqwQ4dUDCBc&uact=5&oq=cat&gs_lp=EgNpbWciA2NhdDIIEAAYgAQYsQMyBRAAGIAEMg4QABiABBixAxiDARiKBTIIEAAYgAQYsQMyBRAAGIAEMg4QABiABBixAxiDARiKBTIIEAAYgAQYsQMyCBAAGIAEGLEDMggQABiABBixAzILEAAYgAQYsQMYgwFI1Q5QpghYxQtwAXgAkAEAmAE_oAGtAaoBATO4AQPIAQD4AQGKAgtnd3Mtd2l6LWltZ5gCA6ACuwGoAgCYAwKSBwEzoAe-Dg&sclient=img&udm=2#vhid=l6VeIZtweKcrUM&vssid=mosaic",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With your Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
        {posts.length > 0 ? (
            posts.map((post, index) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <li>No results found.</li>
          )}

        </ul>
      </section>
    </>
  );
}
