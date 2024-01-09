export default function Headline({ title }) {
  return (
    <section className="container w-full">
      <h2 className="text-lg font-semibold uppercase text-primaryRed">
        <span className="">
          <hr className="inline-block w-6 h-1.5 mr-2 border-primaryRed " />
          {title}
        </span>
      </h2>
    </section>
  );
}
