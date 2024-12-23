import useLocalStorege from "../hooks/useLocalStorege";

function Counter() {
  const [count, setCount] = useLocalStorege("count", 0);

  return (
    <div className="bg-neutral-100 min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">Count: {count}</h1>
        <div className="flex items-center gap-3 mt-4">
          <button
            className="px-4 py-2 bg-blue-400 rounded-md"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            className="px-4 py-2 bg-green-400 rounded-md"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
          <button
            className="px-4 py-2 bg-red-400 rounded-md"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
