import "./file.scss";

function File() {
  return (
    <div className="may-container">
      <a
        href={
          "https://digibouquet.vercel.app/bouquet/671f29b4-5711-4194-b4ed-245993bc1c05"
        }
      >
        <img
          className="seeds"
          src={process.env.PUBLIC_URL + "/assets/seeds.png"}
          alt="seeds-image"
        />
      </a>
    </div>
  );
}
export default File;
