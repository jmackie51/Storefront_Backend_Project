"use strict";
// import { User, UserBase } from "../../models/user";
// import supertest from "supertest";
// import app from "../../server";
// //import dotenv from "dotenv";
// const request = supertest(app);
// //const { POSTGRES_PASSWORD } = process.env;
// const user: User = {
//   firstname: "Jon",
//   lastname: "Mackie",
//   password_digest: "Password123",
//   username: "j.mackie"
// }
// describe('User Handler', () => {
//   it('Create endpoint should return a response of OK', async () => {
//     const result = await request
//         .post("/users")
//         .send(user)
//         .set("Accept", "application/json");
//         expect(result.status).toEqual(200);
//   });
//   it('index endpoint should return response of OK', async () => {
//     const result = await request
//         .get("/users")
//         .set("Accept", "application/json");
//         expect(result.status).toEqual(200);
//   });
//   it('Show endpoint should return a response of OK', async () => {
//     const result = await request
//         .get("/users/1")
//         .set("Accept", "application/json");
//         expect(result.status).toEqual(200);
//   });
//   it('index endpoint should return response of OK', async () => {
//     const result = await request
//         .delete("/users/1")
//         .set("Accept", "application/json");
//         expect(result.status).toEqual(200);
//   });
// });
