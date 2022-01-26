from django.test import TestCase
from django.urls import reverse


class HomePageTest(TestCase):

    def test_uses_index_template(self):
        url = reverse('lists:index')
        response = self.client.get(url)

        self.assertTemplateUsed(response, 'lists/index.html')
