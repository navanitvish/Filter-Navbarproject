// is type kisi dusre component file ko ham pass kara skate  hai as pr

// const Filtter = ({ filterData }) => {
//   return (
//     <div>
//       {filterData.map((data) => {
//         return <button key={data.id}>{data.title}</button>;
//       })}
//     </div>
//   );
// };

// export default Filtter;

const Filtter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;
  function filterHandller(title) {
    setCategory(title);
  }
  return (
    <div className="w-11/12 flex flex-wrap space-x-4 gap-y-4 mx-auto justify-center py-6">
      {filterData.map((data) => {
        return (
          <button
            key={data.id}
            className={`text-lg px-4 py-1 font-medium text-white bg-black hover:bg-opacity-50 border-2   ${
              category === data.title
                ? "bg-opacity-60 border-white"
                : "bg-opacity-40 border-transparent"
            }
          `}
            onClick={() => filterHandller(data.title)}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filtter;

// ${
//   category === data.title
//     ? "bg-opacity-60 border-white"
//     : "bg-opacity-40 border-transparent"
// } transition-all duration-300
