module.exports = function (migration) {
  const song = migration.editContentType('song');
  song.editField('author')
  .required(false);
  song.editField('title')
  .required(false);
};