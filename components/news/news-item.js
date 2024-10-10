import Link from "next/link";

export default function NewsItem({ slug, title, article, author }) {
  return (
    <article>
      <header>
        <h2>{title}</h2>
        <p>{author}</p>
      </header>
      <div>
        <p>{article}</p>
        <Link href={`/news/${slug}`}>View Details</Link>
      </div>
    </article>
  );
}
