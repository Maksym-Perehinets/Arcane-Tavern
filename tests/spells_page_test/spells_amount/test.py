from selenium import webdriver
from selenium.common import NoSuchElementException
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from tests.modules.default_locators.main import DefaultLocators


class ButtonsTest:

    def __init__(self, driver):
        self.driver = driver
        self.locators = DefaultLocators(self.driver)

    def nav_bar_tests(self, element: str):
        self.locators.find_and_click(self.driver, By.CSS_SELECTOR, element)

    def count_amount_of_rows(self, element: str):
        all_rows = self.locators.locate_item(self.driver, By.CSS_SELECTOR, element)
        return len(all_rows)
