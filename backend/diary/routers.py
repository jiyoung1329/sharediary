class MultiDBRouter(object):

    def db_for_read(self, model, **hints):
        if model._meta.app_label == 'diary':
            return 'diary'
        return None

    def db_for_write(self, model, **hints):
        if model._meta.app_label == 'diary':
            # print('db_for_write: %s' % model._meta.app_label)
            return 'diary'

        return None

    def allow_relation(self, obj1, obj2, **hints):
        if obj1._meta.app_label == 'diary' or \
                obj2._meta.app_label == 'diary' : 
            return True

        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if app_label == 'diary':
            return db == 'diary'

        return None