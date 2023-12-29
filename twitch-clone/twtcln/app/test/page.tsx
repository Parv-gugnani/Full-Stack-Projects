"use client";

//make it normal component , it mean that we converting server component to client component
const TestPage = () => {
  const onClick = () => {
    console.log("somethign");
  };

  return (
    <div onClick={onClick}>
      This is TestPage
      <p>
        This make it normal component , it mean that we converting server
        component to client component
      </p>
    </div>
  );
};

export default TestPage;
