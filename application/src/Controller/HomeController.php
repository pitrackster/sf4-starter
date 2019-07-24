<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Translation\TranslatorInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home", methods={"GET"})
     */
    public function index(TranslatorInterface $translator): Response
    {
        $flashbag = $this->get('session')->getFlashBag();

        // Add flash message
        $flashbag->add('error', $translator->trans('error'));
        return $this->render('home/index.html.twig', []);
    }

    /**
     * @Route("/data", name="test", options = { "expose" = true })
     *
     */
    public function getData():JsonResponse
    {
        return $this->json_encode(['name' => 'Wilfried']);
    }
}
