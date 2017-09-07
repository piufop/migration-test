module.exports = function (migration) {
  const owner = migration.editContentType('owner');
  owner.deleteField('pets');
};