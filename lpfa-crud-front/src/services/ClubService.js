import http from "../http-common";

const getAll = () => {
  return http.get("/clubs");
};

const get = id => {
  return http.get(`/clubs/${id}`);
};

const create = data => {
  return http.post("/clubs", data);
};

const update = (id, data) => {
  return http.put(`/clubs/${id}`, data);
};

const remove = id => {
  return http.delete(`/clubs/${id}`);
};

const removeAll = () => {
  return http.delete(`/clubs`);
};

const findByName = name => {
  return http.get(`/clubs?name=${name}`);
};

const ClubService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName
};

export default ClubService;
