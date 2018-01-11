import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
    title: computed('id', function() {
        return 'app.categories.' + this.get('id') + '.title'
    }),
    description: computed('id', function() {
        return 'app.categories.' + this.get('id') + '.description'
    }),
    ico: DS.attr('string', { defaultValue: 'calendar-check-o' })
});
