module.exports = {
  extend: '@apostrophecms/page-type',
  fields: {
    add: {
      h1: {
        type: 'string',
        label: 'h1 goes here',
        required: true
      },
      hero_image: {
        type: 'attachment',
        label: 'image'
      },
      hero_description_1: {
        type: 'area',
        label: 'Hero text',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {}
          }
        }
      },
      hero_description_2: {
        type: 'area',
        label: 'Hero text',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {}
          }
        }
      },
      hero_link: {
        type: 'area',
        label: 'Hero link: read more',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {}
          }
        }
      },
      h2_1: {
        type: 'string',
        label: 'h2 goes here'
      },
      game_img: {
        label: 'Game image',
        type: 'attachment'
      },
      game_description: {
        type: 'area',
        label: 'Hero text',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {}
          }
        }
      },
      game_link: {
        type: 'area',
        label: 'Hero link: read more',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {}
          }
        }
      },
      h2_2: {
        type: 'string',
        label: 'h2 goes here'
      },
      about_description: {
        type: 'area',
        label: 'Hero link: read more',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {}
          }
        }
      },
      about_link: {
        type: 'area',
        label: 'Hero link: read more',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {}
          }
        }
      }
    },
    group: {
      homeFields: {
        label: 'Home-fields',
        fields: [
          'title',
          'h1',
          'hero-img',
          'hero_description_1',
          'hero_description_2',
          'hero_link',
          'h2_1',
          'game_img',
          'game_description',
          'game_link',
          'h2_2',
          'about_description',
          'about_link'
        ]
      }
    }

  }
};
