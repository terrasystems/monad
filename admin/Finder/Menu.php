<?php

namespace monad\admin;
use monad\core;
use monolyth\Language_Access;
use monolyth\adapter\sql\NoResults_Exception;

class Menu_Finder extends core\I18n_Finder implements Language_Access
{
    public function all($size, $page, array $where = [], array $options = [])
    {
        try {
            return $this->adapter->pages(
                "monad_menu m
                 JOIN monad_menu_i18n mi USING(id)
                 JOIN monolyth_language l ON mi.language = l.id",
                ['m.id', 'mi.title', 'l.title AS language_str'],
                [],
                [
                    'order' => sprintf(
                        'l.id = %d DESC,
                         l.is_default DESC,
                         l.sortorder,
                         mi.title',
                        $this->language->current->id
                    ),
                    'group' => 'm.id',
                    'limit' => $size,
                    'offset' => ($page - 1) * $size
                ]
            );
        } catch (NoResults_Exception $e) {
            return null;
        }
    }

    public function find(array $where)
    {
        $menu = $this->model;
        try {
            $menu->load($this->adapter->row('monad_menu', '*', $where));
            return $menu;
        } catch (NoResults_Exception $e) {
            return null;
        }
    }

    public function items(Menu_Model $menu, $language)
    {
        try {
            return $this->adapter->models(
                $this->item,
                'monad_menu_item m
                 JOIN monad_menu_item_i18n i USING(id)
                 LEFT JOIN monad_page_i18n p ON
                    p.id = m.page AND
                    p.language = i.language',
                [
                    'm.id',
                    'COALESCE(i.title', 'p.title) AS title',
                    'm.link',
                    'm.params',
                ],
                [
                    'menu' => $menu['id'],
                    'parent' => null,
                    'i.language' => $language,
                ],
                ['order' => 'm.sortorder ASC']
            );
        } catch (NoResults_Exception $e) {
            return $this->item;
        }
    }

    public function languageData(array $where)
    {
        try {
            return $this->adapter->rows('monad_menu_i18n', '*', $where);
        } catch (NoResults_Exception $e) {
            return null;
        }
    }
}

