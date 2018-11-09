https://next.json-generator.com/41HED4DL4


use this to generate
[
  {
    'repeat(10)': {
      _id: '{{objectId()}}',
      title: '{{lorem(1, "paragraphs")}}',
      description: '{{lorem(1, "paragraphs")}}',
      author: '{{firstName()}}',
      correctanswer: [
        {
          'repeat(1)': '{{lorem(1, "words")}}'
        }
      ],
      answer: [
        {
          'repeat(5)': '{{lorem(1, "words")}}'
        }
      ],     
      tags: function (tags) {
        var fruits = ['Math', 'Science', 'Algebra'];
        return fruits[tags.integer(0, fruits.length - 1)];
      }
    }
  }
]