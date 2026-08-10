function Parent() {
  return (
    <div>
      <h1>Parent Component</h1>

      <Child title="first component" description="this is first description ">
        <button>click here</button>
      </Child>

      <Child title="second component" description="this is second description">
        <ul>
          <li>element 1</li>
          <li>element 2</li>
        </ul>
      </Child>
    </div>
  );
}