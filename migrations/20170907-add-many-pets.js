module.exports = function (migration) {
  const owner = migration.editContentType('owner');
  owner.createField('pets')
  .name('Pets')
  .type('Array')
  .items(
    {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        { linkContentType: [ 'animal' ] }
      ]
    }
  );
};