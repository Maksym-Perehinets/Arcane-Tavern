import os
import time
import unittest
from test import ButtonsTest
from dotenv import load_dotenv
from selenium import webdriver


class TestSuit(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()
        load_dotenv()
        self.site_url: str = os.getenv("SITE_URL")

    def test_buttons_home(self):
        driver = self.driver
        driver.get(self.site_url)
        button_test = ButtonsTest(self.driver)
        assert button_test.home_page() == "http://localhost:8181/"


# execute the script
if __name__ == "__main__":
    unittest.main()