import useFetch from "./index";

export default function TextUseEffect({ url }) {
  const [data, error, pending] = useFetch(url);

console.log(data)
  return (
    <>
      <h1>UseFetch Hook</h1>

      {pending && <h3> pending, please wait</h3>}
      {error && <h3>{`error is ${error}`}</h3>}
      {data &&
        data.products &&
        data.products.map((item) => <p key={item.id}>{item.title}</p>)}
    </>
  );
}
