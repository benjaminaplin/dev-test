// export const host = "http://54.71.189.141:3000/"
export const host =
   process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "http://54.71.189.141:3000/";

          