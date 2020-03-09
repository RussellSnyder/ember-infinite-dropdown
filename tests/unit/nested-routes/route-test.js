import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | nested-routes', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:nested-routes');
    assert.ok(route);
  });
});
