<?php

namespace monad\admin;
use monad\core;
use monolyth\adapter\sql\NoResults_Exception;

class User_Finder extends core\Finder
{
    public function all($size, $page, array $where = [], array $options = [])
    {
        $options += [
            'limit' => $size,
            'offset' => ($page - 1) * $size,
        ];
        try {
            return self::adapter()->pages(
                'monad_auth',
                ['id', 'name', 'email', 'datecreated'],
                $where,
                $options
            );
        } catch (NoResults_Exception $e) {
            return null;
        }
    }

    public function find(array $where)
    {
        try {
            return (new User_Model)->load(self::adapter()->row(
                'monad_auth',
                '*',
                $where
            ));
        } catch (NoResults_Exception $e) {
            return null;
        }
    }
}

