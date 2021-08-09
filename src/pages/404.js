import Image from "next/image";

const Error404 = () => {
  return (
    <div className="error-msg-container">
      <Image
        src="/images/error404.svg"
        alt="404 not found"
        width={400}
        height={400}
      />
      <h2 style={{ textAlign: "center" }} className="heading">
        YOU SEEM LOST
      </h2>
    </div>
  );
};
export default Error404;
