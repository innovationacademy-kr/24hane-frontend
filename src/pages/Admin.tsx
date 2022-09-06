import React from "react";
// import { useAppSelector } from "app/features/hooks";
// import { CSVLink } from "react-csv";
// import { useNavigate } from "react-router-dom";
// import classes from "styles/pages/Admin.module.css";
// const csvData = [
//   ["고유번호", "인트라아이디", "월누적시간"],
//   [1, "minjupar", "100시간30분"],
//   [2, "minjupar2", "80시간30분"],
//   [3, "minjupar3", "81시간30분"],
//   [4, "minjupar", "100시간30분"],
//   [5, "minjupar2", "80시간30분"],
//   [6, "minjupar3", "81시간30분"],
//   [7, "minjupar", "100시간30분"],
//   [8, "minjupar2", "80시간30분"],
//   [9, "minjupar3", "81시간30분"],
//   [10, "minjupar", "100시간30분"],
//   [12, "minjupar2", "80시간30분"],
//   [13, "minjupar3", "81시간30분"],
//   [14, "minjupar", "100시간30분"],
//   [15, "minjupar", "100시간30분"],
//   [16, "minjupar", "100시간30분"],
//   [17, "minjupar", "100시간30분"],
//   [18, "minjupar", "100시간30분"],
// ];

const Admin = () => {
  return null;
  // const navigate = useNavigate();
  // const user = useAppSelector((state) => state.user);
  // const tableRow = csvData[0];
  // const tableBody = csvData.slice(1);
  // useEffect(() => {
  //   if (!user.isAdmin) {
  //     navigate("/");
  //   }
  // }, [navigate, user.isAdmin]);
  // return (
  //   <div className={classes.adminComponent}>
  //     <h3 className={classes.title}>관리자용 전체카뎃 로그</h3>
  //     <div className={classes.tableComponent}>
  //       <table>
  //         <thead>
  //           <tr>
  //             {tableRow.map((title, index) => (
  //               <th key={index}>{title}</th>
  //             ))}
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {tableBody.map((data, index) => {
  //             const [id, loginID, seconds] = data;
  //             return (
  //               <tr key={id}>
  //                 <td>{index}</td>
  //                 <td>{loginID}</td>
  //                 <td>{seconds}</td>
  //               </tr>
  //             );
  //           })}
  //         </tbody>
  //       </table>
  //     </div>
  //     <div className={classes.downloadComponent}>
  //       <p>전체카뎃 로그 엑셀 파일로 저장하기</p>
  //       <CSVLink data={csvData}>
  //         <button>
  //           <span className='material-symbols-outlined'>file_download</span>
  //         </button>
  //       </CSVLink>
  //     </div>
  //   </div>
  // );
};

export default Admin;
