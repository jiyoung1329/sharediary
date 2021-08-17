# Generated by Django 2.2.13 on 2021-08-17 01:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('diary', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('comment', models.TextField()),
            ],
            options={
                'db_table': 'comment',
                'managed': False,
            },
        ),
        migrations.AlterModelOptions(
            name='diary',
            options={'managed': False},
        ),
    ]
