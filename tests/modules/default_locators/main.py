from selenium import webdriver
from selenium.common import NoSuchElementException
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class DefaultLocators:

    def __init__(self, web_driver):
        self.driver = web_driver

    @staticmethod
    def find_and_click(driver, by_type, item_name):
        try:
            driver.find_element(by_type, item_name).click()
        except NoSuchElementException:
            wait = WebDriverWait(driver, 10)
            wait.until(
                EC.element_to_be_clickable((by_type, item_name))
            ).click()

    @staticmethod
    def send_key_to_item(driver, by_type, item_name, data):
        try:
            driver.find_element(by_type, item_name).send_keys(data)
        except NoSuchElementException:
            wait = WebDriverWait(driver, 10)
            wait.until(
                EC.element_to_be_clickable((by_type, item_name))
            ).send_keys(data)

    @staticmethod
    def locate_item(driver, by_type, item_name):
        try:
            return driver.find_element(by_type, item_name)
        except NoSuchElementException:
            wait = WebDriverWait(driver, 10)
            return wait.until(
                EC.find_element((by_type, item_name))
            )
