// ------ START ------

const MyComponent = () => {
  const propsObject = {
    prop1: "value1",
    prop2: "value2",
    prop3: "value3",
    prop4: "value4",
    prop5: "value5"
  };
  return (
    <div>
      <AnotherComponent {...propsObject} />
    </div>
  );
};

// ------ FINISH ------

const MyComponent = () => {
  return (
    <div>
      <AnotherComponent
        prop1={"value1"}
        prop2={"value2"}
        prop3={"value3"}
        prop4={"value4"}
        prop5={"value5"}
      />
    </div>
  );
};
