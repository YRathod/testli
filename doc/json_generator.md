https://next.json-generator.com/41HED4DL4


use this to generate
[
  {
    'repeat(30)': {
      _id: '{{objectId()}}',
      title: '{{lorem(1, "paragraphs")}}',
      description: '{{lorem(1, "paragraphs")}}',
      author: 'Dhiren',
      correctanswer: [
        {
          'repeat(1)': '{{lorem(1, "words")}}'
        }
      ],
      answers: [
        {
          'repeat(5)': '{{lorem(1, "words")}}'
        }
      ],     
      category: function (tags) {
        var fruits = ['Math', 'Science', 'Algebra'];
        return fruits[tags.integer(0, fruits.length - 1)];
      }
    }
  }
]