from django.test import TestCase
from django.urls import reverse
from django.http import HttpRequest
from lists import views


class HomePageTest(TestCase):
    def test_root_url_resolves_to_index_view(self):
        url = reverse('lists:index')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)

    def test_root_url_returns_correct_html(self):
        request = HttpRequest()
        response = views.index(request)
        html = response.content.decode('utf8')
        self.assertTrue(html.startswith('<html>'))
        self.assertIn('<title>To-Do lists</title>', html)
        self.assertTrue(html.endswith('</html>'))