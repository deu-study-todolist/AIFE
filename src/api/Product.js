import axios from "axios";

export const postData = async ({ values, successFn, failFn, errFn }) => {
  // console.log(values);
  try {
    const res = await axios.post(`http://127.0.0.1:5000/translate`, {
      ...values,
    });

    const status = res.status.toString();
    const httpSt = status.charAt(0);
    if (httpSt === "2") {
      console.log(res.data);
      return successFn(res.data);
    }
  } catch (error) {
    console.log(error);
    if (error.request.readyState === 4) {
      console.log();
      return failFn();
    } else {
      errFn("서버에러에요");
    }
  }
};
