module.exports = function (migration) {
  const song = migration.createContentType('song')
  .name('Song')
  .description('Home Song')
  .displayField('title');

  song.createField('title')
  .name('Title')
  .type('Symbol')
  .required(true);

  const author = migration.createContentType('author')
  .name('Author')
  .description('Song author')
  .displayField('name');

  author.createField('name')
  .name('name')
  .type('Symbol')
  .required(true);


  song.createField('author')
  .name('Author')
  .type('Link')
  .linkType('Entry')
  .validations([
    { linkContentType: [ 'author' ]}
  ]);
};