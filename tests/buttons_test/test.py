from selenium import webdriver
from selenium.common import NoSuchElementException
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from tests.modules.default_locators.main import DefaultLocators


class ButtonsTest:

    def __init__(self, driver):
        self.driver = driver
        self.locators = DefaultLocators(self.driver)

    def home_page(self):
        self.locators.find_and_click(self.driver, By.CSS_SELECTOR, "a.active:nth-child(1)")
        return self.driver.current_url
