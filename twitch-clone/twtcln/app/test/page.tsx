"use client";

//make it normal component , it mean that we converting server component to client component
const TestPage = () => {
  const onClick = () => {
    console.log("somethign");
  };

  return (
    <div onClick={onClick} className="bg-blue-500 w-full mr-20 ">
      This is TestPage
      <p className="bg-blue-500">
        This make it normal component , it mean that we converting server
        component to client component
      </p>
    </div>
  );
};

export default TestPage;
