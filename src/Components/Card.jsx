import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
const Card = (props) => {
  let course = props.course;
  let likedCourse = props.likedCourse;
  let setLikedcourse = props.setLikedcourse;

  function clickHandler() {
    // logic
    if (likedCourse.includes(course.id)) {
      //phale se like hua pada tha to ham remove karenge
      setLikedcourse((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("like removed");
    } else {
      // pahle se like nhi hai ye course
      // insert karna h ye course liked course me
      if (likedCourse.length === 0) {
        setLikedcourse([course.id]);
      } else {
        //non-empty se
        setLikedcourse((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }
  return (
    <div className="w-[300px] bg-slate-900 rounded-md overflow-hidden bg-opacity-50">
      <div className="img relative">
        <img src={course.image.url} alt="" className="" />

        <div className="w-[40px] h-[40px] bg-fuchsia-100 rounded-full absolute right-2 bottom-[-10px] grid place-content-center">
          <button onClick={clickHandler}>
            {likedCourse.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>
      <div className="flex flex-col p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p>
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
