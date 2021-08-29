class MultiDBRouter(object):

    def db_for_read(self, model, **hints):
        if model._meta.app_label == 'account':
            return 'account'
        return None

    def db_for_write(self, model, **hints):
        if model._meta.app_label == 'account':
            print('db_for_write: %s' % model._meta.app_label)
            return 'account'

        return None

    def allow_relation(self, obj1, obj2, **hints):
        if obj1._meta.app_label == 'account' or \
                obj2._meta.app_label == 'account' : 
            return True

        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if app_label == 'account':
            return db == 'account'

        return None