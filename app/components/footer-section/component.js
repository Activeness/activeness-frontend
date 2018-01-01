import Component from '@ember/component';
import { A } from "@ember/array"

export default Component.extend({

  /**
   * Defines the tag name of the component ember-view.
   *
   * @property {string} tagName
   */
  tagName: 'footer',

  /**
     * Defines all footer navigation items
     * 
     * @property {Ember.array} footerNavigationItems
     * @default []
     */
    footerNavigationItems: A([
      {
          title: "app.navigation.imprint.title",
          description: "",
          link: "imprint"
      },
      {
          title: "app.navigation.dataprotection.title",
          description: "",
          link: "dataprotection"
      },
      {
          title: "app.navigation.disclaimer.title",
          description: "",
          link: "disclaimer"
      }
  ])

});
