function paginate(query) {
  const page = query.page * 1 || 1;
  const limit = query.limit * 1 || 10;
  const skip = (page - 1) * limit;

  return { skip, limit };
}

module.exports = paginate;
