<?php

namespace monad\admin;
use monolyth\HTTP301_Exception;
use monad\core\Scaffold_Controller;

class Delete_Controller extends Scaffold_Controller
{
    public function get(array $args)
    {
        unset($args['key']);
        $redir = isset($_GET['redir']) ?
            urldecode($_GET['redir']) :
            $this->url('monad/admin/list', $args);
        throw new HTTP301_Exception($redir);
    }

    public function post(array $args)
    {
        $keys = $this->parseKey($args['key']);
        $this->model = $this->finder->find($keys);
        if (!$this->model or $error = $this->model->delete()) {
            if (!isset($error)) {
                $error = 'notfound';
            }
            $this->message->add(
                self::MESSAGE_ERROR,
                $this->text("./error.$error")
            );
        } else {
            $this->message->add(
                self::MESSAGE_SUCCESS,
                $this->text('./success')
            );
        }
        return $this->get($args);
    }
}

