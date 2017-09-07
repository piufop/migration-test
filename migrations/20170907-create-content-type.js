module.exports = function (migration) {
  const animal = migration.createContentType('animal')
  .name('Animal')
  .description('Animal name')
  .displayField('name');

  animal.createField('name')
  .name('Name')
  .type('Symbol')
  .required(true);
};