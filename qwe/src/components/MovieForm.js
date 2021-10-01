import React, { useState } from "react";

const MovieForm = ({ addMovie }) => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");

  const resetForm = () => {
    setMovieTitle("");
    setMovieYear("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(addMovie);
    addMovie({
      title: movieTitle,
      year: movieYear,
    });
    resetForm();
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={movieTitle}
        placeholder="영화제목"
        onChange={(e) => setMovieTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={movieYear}
        placeholder="개봉년도"
        onChange={(e) => setMovieYear(e.target.value)}
      />
      <br />
      <button type="submit">영화추가</button>
    </form>
  );
};
// const [movies, setMovies] = useState([
//   {
//     title: "헬스1",
//     year: 2001,
//   },
//   {
//     title: "헬스2",
//     year: 2002,
//   },
//   {
//     title: "헬스3",
//     year: 2003,
//   },
// ]);
// -----조건 렌더링----------------------------
// const [condition, setCondition] = useState(false);
// const toggle = () => setCondition(!condition);
// useEffect(() => {
//   console.log(condition);
// }, [condition]);
// const renderCondition = condition ? "True" : "False";
// ------------------------------------------------------------------------------------
// const [buttonName, setButtonName] = useState("클릭");
// const clickButton = () => {
//   setButtonName("click");
// };
// 컴포넌트 반복제거
// ------------------------------------------------------------------------------------
// const [count, setCount] = useState(0);
// const [count1, setCount1] = useState(0);
// // useEffect 리렌더링 될때마다 다시 실행됩니다.
// useEffect(() => {
//   console.log(count);
// }, [count, count1]);
// useEffect(() => {
//   console.log("first rendering");
// }, []);
// const increment = () => {
//   setCount(count + 1);
// };
// ------------------------------------------------------------------------------------
// const [username, setUsername] = useState("");
// const [password, setPassword] = useState("");
// const [text, setText] = useState("hello");
// const onClick = () => {
//   alert("asd");
// };
// ----------------------------------------------------------------------------------
// const onKeyUp = (e) => {
//   if (e.keyCode === 13) {
//     //엔터일때
//     onClick();
//   }
// };
// // let text = "hello";
// ----------------------------------------------------------------------------------
// const Update = () => {
//   // text = "sujin";
//   console.log(text);
//   // document.getElementById("text").innerHTML = text;
//   setText("sujin");
// };
// ----------------------------------------------------------------------------------
// const onSubmit = (e) => {
//   e.preventDefault();
//   console.log(username, password);
// };
// -----------------------------------------------------------------------------------------
// const renderMovies = movies.map((movie) => {
//   console.log({ movie });
//   return <Movie movie={movie} key={movie.title} />;
// });
// const onSubmit = (movie) => {
//   setMovies([...movies, movie]);
// };
// return (
/* <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={onSubmit}>Login</button> */
/* <br></br>
      <span id="text">{text}</span>
      <button onClick={Update}>Update</button> */
// <button onClick={increment}>Click</button>
// <button onClick={() => setCount1(count1 + 1)}>Click1</button>
//   <div>
//     <h1>무비</h1>
//     <MovieForm addMovie={onSubmit} />
//     {renderMovies}
//     {/* <div className="movie">
//       <div className="movie-title">{movies[0].title}</div>
//       <div className="movie-year">{movies[0].year}</div>
//     </div> */}
//   </div>
// );
export default MovieForm;
