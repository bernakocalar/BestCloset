import BlogCard from "../components/BlogCard";

export default function BlogPage() {
  return (
    <section className="w-8/12 mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
      {Array.from({ length: 6 }).map((_, i) => (
        <BlogCard key={i} />
      ))}
    </section>
  );
}
