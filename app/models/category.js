import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({

    name: DS.attr('string'),

    activity: DS.belongsTo('activity', { async: true, /*inverse: 'category'*/}),

    title: computed('id', function() {
        return 'app.categories.' + this.get('name') + '.title'
    }),
    description: computed('id', function() {
        return 'app.categories.' + this.get('name') + '.description'
    }),
    ico: DS.attr('string', { defaultValue: 'calendar-check-o' })
});
