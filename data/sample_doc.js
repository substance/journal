var sampleDoc = {
  "schema": [
    "substance-article",
    "0.1.0"
  ],
  "nodes": {
    "document": {
      "id": "document",
      "type": "document",
      "title": "Test document",
      "published_on": "2015-06-09T18:23:28.407Z"
    },
    "content": {
      "type": "container",
      "id": "content",
      "nodes": [
        "heading_1",
        "paragraph_1",
        "heading_2",
        "paragraph_2",
        "paragraph_3",
        "heading_3",
        "paragraph_4",
        "paragraph_5"
      ]
    },
    "paragraph_1": {
      "type": "paragraph",
      "id": "paragraph_1",
      "content": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis scelerisque ligula. Proin tristique ligula id magna finibus rhoncus. Quisque dictum viverra sapien, vel elementum metus condimentum nec. Donec ac tellus nunc. Nullam fermentum pharetra justo, accumsan tristique quam tempus a. Quisque vitae luctus velit. Praesent lacinia enim ex, sed pulvinar neque dictum ultricies. Sed est metus, bibendum sed suscipit ut, cursus ut mi. Pellentesque sagittis mi nisi, eu blandit metus congue id. Pellentesque eget magna porta, rutrum odio et, commodo lacus. Sed vitae vehicula ante. Quisque suscipit iaculis est, vitae aliquet lacus dictum ut. Nulla enim dolor, pulvinar at odio vitae, sollicitudin eleifend ex. Maecenas eget ligula eget sem efficitur consectetur nec vel sem. In massa mauris, consequat vitae enim eget, vehicula aliquet turpis.'
    },

    "heading_1": {
      "type": "heading",
      "id": "heading_1",
      "level": 1,
      "content": 'Hello world'
    },

    "heading_2": {
      "type": "heading",
      "id": "heading_2",
      "level": 2,
      "content": 'Heading Level 2'
    },

    "heading_3": {
      "type": "heading",
      "id": "heading_3",
      "level": 3,
      "content": 'Heading Level 3'
    },

    "paragraph_2": {
      "type": "paragraph",
      "id": "paragraph_2",
      "content": 'Proin in luctus sapien, ultrices commodo augue. Phasellus ultrices commodo augue, in blandit nibh euismod nibh vitae erat luctus ac. Aliquam euismod nibh vitae erat pulvinar, at semper libero tincidunt. Nulla finibus est ac consequat consequat. Sed at condimentum purus. Aliquam vulputate ipsum ut justo posuere, quis varius risus finibus. Ut scelerisque laoreet vehicula. Nullam gravida fringilla justo, nec efficitur nunc sagittis et. Suspendisse nibh ligula, imperdiet id interdum et, sollicitudin non mauris. Suspendisse potenti. Suspendisse luctus iaculis nulla sed efficitur. Nullam sed viverra metus. Etiam dictum blandit enim tincidunt maximus. Nullam tempus nibh at varius interdum.'
    },

    "comment_1": {
      "id": "comment_1",
      "type": "comment",
      "container": "content",
      "startPath": ["paragraph_1", "content"],
      "startOffset": 20,
      "endPath": ["paragraph_1", "content"],
      "endOffset": 50,
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis scelerisque ligula. Proin tristique ligula id magna finibus rhoncus. Quisque dictum viverra sapien, vel elementum metus condimentum nec. Donec ac tellus nunc. Nullam fermentum pharetra justo, accumsan tristique quam tempus a. Quisque vitae luctus velit.",
      "creator": "michael",
      "creator_name": "Michael Aufreiter",
      "created_at": "2015-06-07T15:15:18.407Z",
      "replies": ["reply_1"]
    },

    "comment_2": {
      "id": "comment_2",
      "type": "comment",
      "container": "content",
      "startPath": ["paragraph_2", "content"],
      "startOffset": 300,
      "endPath": ["paragraph_2", "content"],
      "endOffset": 330,
      "content": "Pellentesque eget magna porta, rutrum odio et, commodo lacus. Sed vitae vehicula ante. Quisque suscipit iaculis est, vitae aliquet lacus dictum ut.",
      "creator": "oliver",
      "creator_name": "Oliver Buchtala",
      "created_at": "2015-06-09T18:23:28.407Z",
      "replies": []
    },

    "reply_1": {
      "id": "reply_1",
      "type": "reply",
      "content": "You are absolutely right.",
      "creator": "daniel",
      "creator_name": "Daniel Beilinson",
      "created_at": "2015-06-09T18:23:28.407Z"
    },

    "paragraph_3": {
      "type": "paragraph",
      "id": "paragraph_3",
      "content": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis scelerisque ligula. Proin tristique ligula id magna finibus rhoncus. Quisque dictum viverra sapien, vel elementum metus condimentum nec. Donec ac tellus nunc. Nullam fermentum pharetra justo, accumsan tristique quam tempus a. Quisque vitae luctus velit. Praesent lacinia enim ex, sed pulvinar neque dictum ultricies. Sed est metus, bibendum sed suscipit ut, cursus ut mi. Pellentesque sagittis mi nisi, eu blandit metus congue id. Pellentesque eget magna porta, rutrum odio et, commodo lacus. Sed vitae vehicula ante. Quisque suscipit iaculis est, vitae aliquet lacus dictum ut. Nulla enim dolor, pulvinar at odio vitae, sollicitudin eleifend ex. Maecenas eget ligula eget sem efficitur consectetur nec vel sem. In massa mauris, consequat vitae enim eget, vehicula aliquet turpis.'
    },

    "paragraph_4": {
      "type": "paragraph",
      "id": "paragraph_4",
      "content": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis scelerisque ligula. Proin tristique ligula id magna finibus rhoncus. Quisque dictum viverra sapien, vel elementum metus condimentum nec. Donec ac tellus nunc. Nullam fermentum pharetra justo, accumsan tristique quam tempus a. Quisque vitae luctus velit. Praesent lacinia enim ex, sed pulvinar neque dictum ultricies. Sed est metus, bibendum sed suscipit ut, cursus ut mi. Pellentesque sagittis mi nisi, eu blandit metus congue id. Pellentesque eget magna porta, rutrum odio et, commodo lacus. Sed vitae vehicula ante. Quisque suscipit iaculis est, vitae aliquet lacus dictum ut. Nulla enim dolor, pulvinar at odio vitae, sollicitudin eleifend ex. Maecenas eget ligula eget sem efficitur consectetur nec vel sem. In massa mauris, consequat vitae enim eget, vehicula aliquet turpis.'
    },

    "paragraph_5": {
      "type": "paragraph",
      "id": "paragraph_5",
      "content": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis scelerisque ligula. Proin tristique ligula id magna finibus rhoncus. Quisque dictum viverra sapien, vel elementum metus condimentum nec. Donec ac tellus nunc. Nullam fermentum pharetra justo, accumsan tristique quam tempus a. Quisque vitae luctus velit. Praesent lacinia enim ex, sed pulvinar neque dictum ultricies. Sed est metus, bibendum sed suscipit ut, cursus ut mi. Pellentesque sagittis mi nisi, eu blandit metus congue id. Pellentesque eget magna porta, rutrum odio et, commodo lacus. Sed vitae vehicula ante. Quisque suscipit iaculis est, vitae aliquet lacus dictum ut. Nulla enim dolor, pulvinar at odio vitae, sollicitudin eleifend ex. Maecenas eget ligula eget sem efficitur consectetur nec vel sem. In massa mauris, consequat vitae enim eget, vehicula aliquet turpis.'
    }
  }
};

module.exports = sampleDoc;