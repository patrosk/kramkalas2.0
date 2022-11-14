module.exports = {
  extend: '@apostrophecms/page-type',
  fields: {
    add: {
      h1: {
        type: 'string',
        label: 'Heading 1 (h1)',
        required: true
      },
      hero_image: {
        type: 'attachment',
        label: 'Hero image'
      },
      //   hero_image_alt: {
      //     type: 'string',
      //     label: 'Image alt text.'
      //   },
      hero_description_1: {
        type: 'area',
        label: 'Hero paragraph 1',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {}
          }
        }
      },
      hero_description_2: {
        type: 'area',
        label: 'Hero paragraph 2',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {}
          }
        }
      },
      hero_link_text: {
        type: 'string',
        label: 'Hero link: text'
      },
      hero_link_url: {
        type: 'string',
        label: 'Hero link: url'
      },
      h2_1: {
        type: 'string',
        label: 'Heading 2 (h2)'
      },
      game_img: {
        label: 'Game image',
        type: 'attachment'
      },
      game_description: {
        type: 'area',
        label: 'Game description',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {}
          }
        }
      },
      game_link_text: {
        type: 'string',
        label: 'Game link text'
      },
      game_link_url: {
        type: 'string',
        label: 'Game link url'
      },
      h2_2: {
        type: 'string',
        label: 'Heading 3 (h2)'
      },
      about_description: {
        type: 'area',
        label: 'About description',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {}
          }
        }
      },
      about_link_text: {
        type: 'string',
        label: 'About link text'
      },
      about_link_url: {
        type: 'string',
        label: 'About link url'
      }
    },
    group: {
      homeFields: {
        label: 'Home-fields',
        fields: [
          'title',
          'h1',
          'hero_image',
          'hero_description_1',
          'hero_description_2',
          'hero_link_text',
          'hero_link_url',
          'h2_1',
          'game_img',
          'game_description',
          'game_link_text',
          'game_link_url',
          'h2_2',
          'about_description',
          'about_link_text',
          'about_link_url'
        ]
      }
    }

  }
};
