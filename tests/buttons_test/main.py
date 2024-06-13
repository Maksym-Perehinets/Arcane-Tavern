import os
import time
import unittest
from test import ButtonsTest
from dotenv import load_dotenv
from selenium import webdriver


class TestSuit(unittest.TestCase):

    def setUp(self):
        # next two lines added to be used in automated test env like CI/CD pipeline
        options = webdriver.FirefoxOptions()
        # options.add_argument('--headless')
        self.driver = webdriver.Firefox(options=options)
        load_dotenv()
        self.site_url: str = os.getenv("SITE_URL")

    def test_button_home(self):
        driver = self.driver
        driver.get(self.site_url)
        button_test = ButtonsTest(self.driver)
        assert button_test.nav_bar_tests("a.active:nth-child(1)") == self.site_url + "/"

    def test_button_spells(self):
        driver = self.driver
        driver.get(self.site_url)
        button_test = ButtonsTest(self.driver)
        assert button_test.nav_bar_tests("li.btn:nth-child(2) > a:nth-child(1)") == self.site_url + "/spell-list"

    def test_button_characters(self):
        driver = self.driver
        driver.get(self.site_url)
        button_test = ButtonsTest(self.driver)
        assert button_test.nav_bar_tests("li.btn:nth-child(3) > a:nth-child(1)") == self.site_url + "/characters"

    def test_button_about_us(self):
        driver = self.driver
        driver.get(self.site_url)
        button_test = ButtonsTest(self.driver)
        assert button_test.nav_bar_tests("li.btn:nth-child(4) > a:nth-child(1)") == self.site_url + "/about-us"

    def test_button_contact(self):
        driver = self.driver
        driver.get(self.site_url)
        button_test = ButtonsTest(self.driver)
        assert button_test.nav_bar_tests("li.btn:nth-child(5) > a:nth-child(1)") == self.site_url + "/contact"

    def tearDown(self):
        self.driver.quit()


# execute the script
if __name__ == "__main__":
    unittest.main()
