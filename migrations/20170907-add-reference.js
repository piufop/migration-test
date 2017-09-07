module.exports = function (migration) {
  const owner = migration.createContentType('owner')
  .name('Owner')
  .description('Animal owner')
  .displayField('name');

  owner.createField('name')
  .name('Name')
  .type('Symbol')
  .required(true);

  owner.createField('favoritepet')
  .name('FavoritePet')
  .type('Link')
  .linkType('Entry')
  .validations([
    { linkContentType: [ 'animal' ]}
  ]);
};