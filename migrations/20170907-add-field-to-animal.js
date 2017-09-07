module.exports = function (migration) {
  const animal = migration.editContentType('animal');
  animal.editField('name')
  .required(false);

  animal.createField('age')
  .name('Age')
  .type('Integer')
  .required(true);
};