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
        button_test.nav_bar_tests("a.active:nth-child(1)")
        elements = button_test.count_amount_of_rows("#tableBody")
        assert elements == 50

    def tearDown(self):
        self.driver.quit()


# execute the script
if __name__ == "__main__":
    unittest.main()
